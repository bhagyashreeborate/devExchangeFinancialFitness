from flask import Flask, render_template, request
from domain.User import UserInfo
from infrastructure import infra


app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html")

@app.route('/login')
def login():
    return render_template("login.html")


@app.route('/create_user')
def create_user():
    return render_template("create-user.html")

@app.route('/microphone')
def microphone():
    return render_template("/microphone/index-micro.html")

@app.route('/primary_dashboard')
def primary_dashboard():
    return render_template("primary-dashboard.html")



@app.route('/register', methods=('GET', 'POST'))
def register():
    if request.method == 'POST':
        new_user = UserInfo(request.form)


        print(type(new_user.pin))

        reply = infra.insert_into_db(new_user)
        print(reply)

    return render_template('login.html')



if __name__ == '__main__':
    app.run()
