let header = document.getElementById("#demo");
document.getElementById("demo").innerHTML = "";


function countdown(){
    setTimeout(() => {
      let no = 10;
        document.getElementById("demo").innerHTML = no;
         no--;
        setTimeout((ne)=>{
            document.getElementById("demo").innerHTML = ne;
             ne--;
            setTimeout((nf)=>{
                document.getElementById("demo").innerHTML = nf;
                nf--;

                setTimeout((ni)=>{
                    document.getElementById("demo").innerHTML = ni;
                       ni--;
                    setTimeout((ny)=>{
                        document.getElementById("demo").innerHTML = ny;

                        ny--;
                        setTimeout((nt)=>{
                            document.getElementById("demo").innerHTML = nt;

                            nt--;
                            setTimeout((nu)=>{
                                document.getElementById("demo").innerHTML = nu;

                                nu--;
                                setTimeout((np)=>{
                                    document.getElementById("demo").innerHTML = np;

                                    np--;
                                    setTimeout((nl)=>{
                                        document.getElementById("demo").innerHTML = nl;

                                        nl--;
                                        setTimeout((mn)=>{
                                            document.getElementById("demo").innerHTML = mn;

                                            mn--;
                                            setTimeout(()=>{
                                                document.getElementById("demo").innerHTML = "Happy Independence Day";

                                            },2000)
                                        },2000,nl)
                                    },2000,np)
                                },2000,nu)
                            },2000,nt)
                        },3000,ny)
                    },2000,ni)
                
                },3000,nf)
                
            },4000,ne)
        },2000,no)
       

    },1000)


}

 countdown();




