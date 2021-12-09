import boto3
import logging
import os

logger = logging.getLogger()
logger.setLevel(logging.INFO)
log_client = boto3.client('logs')

def handler(event, context): 
    # Fetch all log groups
    log_groups = fetch_log_groups_no_expiration()

    logger.info("Changing retentions for following log groups")
    logger.info(log_groups)
    # Set retention to one month
    for log_group in log_groups:
        log_client.put_retention_policy(
            logGroupName=log_group,
            retentionInDays=int(os.environ.setdefault('retentionInDays', 30))
        )
    
    return {
        'message': 'Changed never-expire retentions.'
    }


def fetch_log_groups_no_expiration():
    log_groups = []
    response = log_client.describe_log_groups()
    nextToken="first"

    # Check if there is a next-token
    while nextToken is not None:
        if 'logGroups' in response:
            for resp in response['logGroups']:
                # Check if retentioninDays is in the object, 
                # if not it is set to never expire
                if 'retentionInDays' not in resp:
                    log_groups.append(resp['logGroupName'])

            if 'nextToken' in response:
                nextToken=response['nextToken']
            else:
                nextToken=None
    return log_groups

# Run locally and not through Lambda
if __name__ == "__main__":
    handler("test","test")
