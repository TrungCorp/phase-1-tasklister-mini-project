const list = document.getElementById('tasks')
document.addEventListener("DOMContentLoaded", () => {




  // your code here
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    let ele = e.target['new-task-description'].value
    console.log(ele)
    submitText(ele)
    
    
  })

});
function submitText(text){
  let p = document.createElement('p')
  p.textContent = text
  document.getElementById('tasks').appendChild(p)
}