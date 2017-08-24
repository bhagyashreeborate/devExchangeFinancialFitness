import boto
import boto3
from config import Config

dynamodb = boto3.resource('dynamodb',
                          aws_access_key_id=Config.AWS_KEY,
                          aws_secret_access_key=Config.AWS_SECRET_KEY,
                          region_name=Config.REGION)

table = dynamodb.Table('user_details')
tables = boto3.resource('dynamodb', aws_access_key_id=Config.AWS_KEY,
                          aws_secret_access_key=Config.AWS_SECRET_KEY, region_name=Config.REGION).Table('user_details')
print(tables.creation_date_time)

def main():
    print("29.7604267")



def insert_into_db(user):
    print(user.lastname)
    try:

        table.put_item(
            Item={
                'pin': user.pin,
                'firstname': user.firstname,
                'lastname': user.lastname,


            }
        )

    except Exception as E:
        print(E)
        return False
    return True


if __name__ == "__main__":
    main()

