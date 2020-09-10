import {BaseComponent} from './BaseComponent.js';

class List extends BaseComponent{
    constructor(){
        super();

        this.state = {
            list:[
                {'name': 'meme1','img':'https://znews-photo.zadn.vn/w660/Uploaded/aohvtsw/2019_09_28/o11_thumb.jpg' ,'description': "Day la meme", "datemodified": "2020/09/10"},
                {'name': 'meme2','img':'https://media.travelmag.vn/center/560x315/files/news/2020/08/07/meme-phai-toi-toi-dam-cho-may-nhat-roi-noi-dinh-dam-co-nguon-goc-tu-dau-tai-sao-duoc-nhieu-nguoi-biet-den-133131.jpg' ,'description': "Day la meme", "datemodified": "2020/09/10"},
                {'name': 'meme3','img':'https://semaster.vn/wp-content/uploads/2020/03/meme-la-gi.jpeg' ,'description': "Day la meme", "datemodified": "2020/09/10"},
                {'name': 'meme4','img':'https://i.pinimg.com/originals/75/31/5d/75315db511a058432745fc37d82a7c44.png' ,'description': "Day la meme", "datemodified": "2020/09/10"},
            ],};
    }
    render(){

        let html = "";
        for ( let data of this.state.list){
            html += `<meme-container name="${data.name}" img="${data.img}" 
             description="${data.description}" datemodified="${data.datemodified}">
            </meme-container> `
        }
        console.log(html)

        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./css/style.css">
            <div class="main">
                <div class="size">
                    <form id="form-add-task">
                     <div class="form-group">
                        <textarea class="form-control"  name="name" placeholder="Input name"></textarea>
                        <br>
                        <br>
                        <input class="form-control" type="text" name="img" placeholder="Input Link image"> 
                        <br>
                        <input class="form-control" type="text" name="description" placeholder="Input description " >
                        <br>
                        <input class="form-control" type="datetime-local" name="datemodified" placeholder="Input Date modified" >
                        <br>
                        <button>Add more</button>
                    </div> 
                    </form>
                </div>
                    <div class="list">
                        ${html}
                    </div>
            </div>
        `;    

        this.$formAdd = this._shadowRoot.getElementById("form-add-task");
        this.$formAdd.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = { 
                "name" : this.$formAdd.name.value,
                "img": `${this.$formAdd.img.value}`,
                "description": this.$formAdd.description.value,
                "datemodified" : this.$formAdd.datemodified.value,
            }
            this.state.list.push(newMeme);
            this.render();
        }
    }

}

window.customElements.define("list-container",List)