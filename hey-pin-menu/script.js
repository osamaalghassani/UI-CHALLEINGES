const listOfItems = [
    {
      vector:
        "https://cdn.iconscout.com/icon/free/png-256/facebook-circle-1868984-1583148.png",
      title: "facebook.com/osamaalghassin/",
      description: "Follow me"
    },
    
    {
      vector:
        "https://cdn.icon-icons.com/icons2/642/PNG/512/linkedin_icon-icons.com_59208.png",
      title: "linkedin.com/in/osamaalghassani/",
      description: "Follow me"
    },
    {
      vector:
        "https://icon-library.com/images/github-icon-svg/github-icon-svg-17.jpg",
      title: "github.com/osamaalghassani",
      description: "Follow me"
    }
  ];
  const useScaleChange=0.033333333;
  const useTranslateChange=0.7;
document.addEventListener("DOMContentLoaded",()=>{
    const stack=document.getElementById("stack");

    for (let index = 0; index < listOfItems.length; index++) {
        const reversIndex=listOfItems.length - 1 - index;
        let div=document.createElement("div");
        div.classList.add("single-block");
        div.innerHTML=`
        <div class="content">
        <img src="${listOfItems[index].vector}"/>
        <div><H3>${listOfItems[index].title}</h3><p>${listOfItems[index].description}</p></div>
       
        </div>
        
        `
        div.style.transform=`scale(${1- reversIndex * useScaleChange}) translateY(-${useTranslateChange * reversIndex}rem)`
        stack.append(div);
        
        
        
    }
    
    
    stack.addEventListener("click",(e)=>{
        e.stopPropagation();
        const blocks=document.querySelectorAll(".single-block");
        const reversIndex=blocks.length  - 1;
        const reotate=0.4;
        blocks.forEach((block,i)=>{
block.style.transform=`rotate(${(reversIndex - i) * 2}deg) translate(-${((reversIndex - i) * reotate)}rem ,-${((reversIndex - i) * reotate) * 10}rem)`
        })
    })
    addEventListener("click",(e)=>{
        const blocks = document.querySelectorAll('.single-block');

        blocks.forEach((block, i) => {
            const reverseIndex = listOfItems.length - 1 - i;
            block.style.transform = `scale(${
              1 - reverseIndex * useScaleChange
            }) translateY(-${useTranslateChange * reverseIndex}rem)`;
          });
    })
})

// block.style.transform=`rotate(${(reversIndex - i) * 2}deg) translate(-${((reversIndex - i) * reotate)}rem ,-${((reversIndex - i) * reotate) * 10}rem)`
// block.style.transform=`rotate(${((reversIndex - i) * reotate) * 2}deg) translate(-${((reversIndex - i) * reotate)}rem ,-${((reversIndex - i) * reotate) * 10}rem)`
