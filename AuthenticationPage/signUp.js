
const signupBtn = document.getElementById("signUpBtn");
export const createUser = functions.auth.user().onCreate((user) => {
    const { uid, displayName, email } = user;

    return admin.firestore()
        .collection('users')
        .doc(uid)
        .set({ uid, displayName, email })
});
