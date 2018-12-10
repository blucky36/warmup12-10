# warmup 12/10

```bash
HI PHIL
```
```css
@keyframes spin {
  100% {transform:rotate(360deg);}
}
```
```javascript
const spinning =()=>{
  let divArr = document.getElementsByTagName("div")
  for(let i = 0; i<divArr.length;i++){
    divArr[i].style.animation = "spin 20s linear infinite"
  }
}()
```
