let first = document.getElementById('firstname');
let last = document.getElementById('lastname');
let email = document.getElementById('email');
let phone = document.getElementById('phonenumber');

let obj ={
    firstName :'',
    lastName :'',
    email : '',
    phone :''
}

async function addObj(obj) {
    await firebase.firestore().collection('users').add({
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        phone: obj.phone,
    })
}

function addData() {;
    obj.firstName = first.value
    obj.lastName = last.value;
    obj.email = email.value;
    obj.phone = phone.value;
    addObj(obj);
}

async function readData() {
    let result = await firebase.firestore().collection('users').get();
    for (let doc of result.docs) {
        console.log(doc.data())
    }
}

async function updatePhone(){
    let result = await firebase.firestore().collection('users').get();
    for(let doc of result.docs){
        let newPhone = "84" + doc.data().phone.slice(2);
        await firebase.firestore().collection('users').doc(doc.id).update({
            phone: newPhone
        })
    }
}

async function deleteData(lname){

        // tự nhìn xem có tên nào trung nhau rồi nhập :)))

    // let result = await firebase.firestore().collection('users').where('lastName','==',lname).get();
    // for(let doc of result.docs){
    //     await firebase.firestore().collection('users').doc(doc.id).delete();

    // }

    let tmp = {};
    let result = await firebase.firestore().collection('users').get();
    for(let doc of result.docs){
       let lastName = doc.data().lastName;
       if(tmp[lastName]){
           tmp[lastName]++;
       }else{
           tmp[lastName] = 1;
       }
    }
    for (let key in tmp){
        if(tmp[key] > 1){
            result = await firebase.firestore().collection('users').where('lastName','==',key).get();
            for(let doc of result.docs){
                firebase.firestore().collection('users').doc(doc.id).delete();
            }
    }
}