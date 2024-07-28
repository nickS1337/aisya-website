document.addEventListener("DOMContentLoaded", ()=>{

    let changeRole = ()=>{

        let roles = ["model","artist","creator","god","photography"];
        let random_role = Math.floor(Math.random()*roles.length);
        console.log(random_role);
        document.getElementById("landing-subheader").innerHTML = roles[random_role];

        let newTimeout = Math.floor(Math.random()*500);
        setTimeout(()=>{ changeRole(); }, newTimeout);

    }

    changeRole();

});