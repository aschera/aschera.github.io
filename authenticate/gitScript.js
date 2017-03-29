/* GitHub */




<!--  **************************************************************************** -->
        /* The log in function */
        
        function SignInNow() {
            if (!firebase.auth().currentUser) {

                var provider = new firebase.auth.GithubAuthProvider();
                provider.addScope('repo');

                
                //Re-dictedt!!!!!!!!!!!!!!!!
                firebase.auth().signInWithRedirect(provider);

            } else {
                firebase.auth().signOut();
            }
            // login button
            document.getElementById('theLoginButton').disabled = true;
            document.getElementById('theLoginButton2').disabled = false;
        }


        function gitHubVerification() {
            
            firebase.auth().getRedirectResult().then(function(result) {
                console.error(result);
                if (result.credential) {

                    var token = result.credential.accessToken;

                    document.getElementById('gitHubToken').textContent = token;
                } else {
                    document.getElementById('gitHubToken').textContent = '';

                }
                
                
                //the user who is logged in!
                var user = result.user;
                
                
            }).catch(function(error) {

                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                if (errorCode === 'auth/account-exists-with-different-credential') {
                    alert('You have already signed up with a different auth provider for that email.');
                    // If you are using multiple auth providers on your app you should handle linking
                    // the user's accounts here.
                } else {
                    console.error(error);
                }

            });

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    console.error('logged in');

                    document.getElementById('loginStatus').textContent = 'Logged in';
                    document.getElementById('theLoginButton').textContent = 'GitHub';
                    document.getElementById('theLoginButton2').style.display = 'none';
                    document.getElementById('loginHeader').textContent = 'Log out';
                    document.getElementById('userInformation').style.display = 'block';

                    // user name
                    var userInformation = document.getElementById('userWhoIsloggedIn');
                    userInformation.textContent = JSON.stringify(user.displayName, null, '  ');

                    //picture icon
                    var icon = (user.providerData[0].photoURL);
                    let image = document.createElement('img');
                    image.src = icon;
                    var userpicture = document.getElementById('userimage');
                    userpicture.appendChild(image);

                } else {


                    document.getElementById('loginStatus').textContent = 'Logged out';
                    document.getElementById('theLoginButton').textContent = 'GitHub';
                    document.getElementById('userWhoIsloggedIn').textContent = '';
                    document.getElementById('gitHubToken').textContent = '';
                    document.getElementById('userimage').textContent = '';
                    document.getElementById('userInformation').style.display = 'none';
                    document.getElementById('loginHeader').textContent = 'Log in';
                }

                document.getElementById('theLoginButton').disabled = false;
               

            });


        }
        
        
        window.onload = function() {
            gitHubVerification();
        };
        
   