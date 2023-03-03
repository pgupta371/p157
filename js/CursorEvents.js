AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"",type:"string"},
    },
    init:function(){
    
    this.handleMouseEnterEvents()
    this.handleMouseLeaveEvents()
    },
    
    handlePlaceListState:function(){
        const id=this.el.getAttribute("id")
        const postersId=["spider-man","captain-america","thor","black-widow"]
        if(postersId.includes(id)){
            const postersContainer =document.querySelector("#posters-container")
            postersContainer.setAttribute("cursor-listener",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"black",
                opacity:1
            })
        }
    },
    
    handleMouseEnterEvents:function(){
        // mo9use enter events
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlaceListState()
        })
    },
    
    
    handleMouseLeaveEvents:function(){
        // mo9use leave events
        this.el.addEventListener("mouseleave",()=>{
           const {selectedItemId}= this.data
           if (selectedItemId) {
            const el = document.querySelector(`#${selectedItemId}`)
           const id = el.getAttribute("id")
           if (id == selectedItemId){
            el.setAttribute("material", {color: "blue"})
           }
        
        }
        })
    },
    
    })