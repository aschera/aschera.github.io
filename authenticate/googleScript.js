/* GOOGLE */

/*SHA-1 */

<!--  **************************************************************************** -->
        /* The log in function */
        
        function SignInNow2() {
            if (!firebase.auth().currentUser) {

                //var provider = new firebase.auth.GithubAuthProvider();
                var provider = new firebase.auth.GoogleAuthProvider();
                //provider.addScope('repo');
                provider.addScope('https://www.googleapis.com/auth/plus.login');
                
                //Re-dictedt!!!!!!!!!!!!!!!!
                //firebase.auth().signInWithRedirect(provider);
                firebase.auth.currentUser.linkWithRedirect(provider);
                
                googleVerification();

            } else {
                //firebase.auth().signOut();
                
                firebase.auth().signOut().then(function() {
                  console.log('signed out of Google');
                }).catch(function(error) {
                 console.log(error);
                });
            }
            // login button
            document.getElementById('theLoginButton2').disabled = true;
            
        }


        function googleVerification() {
            firebase.auth().getRedirectResult().then(function(result) {
                
                if (result.credential) {
                    var credential = result.credential;
                    var user = result.user;
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
                    document.getElementById('theLoginButton2').textContent = 'Google';
                    document.getElementById('theLoginButton').style.display = 'none';
                    document.getElementById('loginHeader').textContent = 'Log out';
                    document.getElementById('userInformation').style.display = 'block';

                    // user name
                    var userInformation = document.getElementById('userWhoIsloggedIn');
                    userInformation.textContent = JSON.stringify(user.providerData[0].displayName, null, '  ');

                    //picture icon
                    var icon = (user.providerData[0].photoURL);
                    let image = document.createElement('img');
                    image.src = icon;
                    var userpicture = document.getElementById('userimage');
                    userpicture.appendChild(image);

                } else {


                    document.getElementById('loginStatus').textContent = 'Logged out';
                    document.getElementById('theLoginButton2').textContent = 'Google';
                    document.getElementById('theLoginButton').style.display = 'block';
                    document.getElementById('userWhoIsloggedIn').textContent = '';
                    document.getElementById('gitHubToken').textContent = '';
                    document.getElementById('userimage').textContent = '';
                    document.getElementById('userInformation').style.display = 'none';
                    document.getElementById('loginHeader').textContent = 'Log in';
                }

                document.getElementById('theLoginButton2').disabled = false;
               
            });


        }
        
        
        /*window.onload = function() {
            googleVerification();
        };*/
        
   