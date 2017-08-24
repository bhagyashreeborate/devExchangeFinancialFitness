class UserInfo:
    firstname = None
    lastname = None
    pin = None



    def __init__(self, form):
        self.firstname = form['firstname']
        self.lastname= form['lastname']
        self.pin  = form['pin']




