const loadData = () => {
    const url = `	https://api.adviceslip.com/advice`;
    fetch(url).then(res => res.json()).then(data => displayData(data.slip));
}
const adviceContainer2 = document.getElementById('advice-container2');

const displayData = (data) => {
    console.log(data);
    const div = document.createElement('div');
    div.innerHTML = `
    
    <a href="#" class="block h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <p></p>
    <hr class="py-2">
    <p>"${data.advice}"</p>
</blockquote>
</a>
    
    `
    adviceContainer2.appendChild(div);
}
const loadAdvice = (query) => {
    console.log(query);
    const url = `https://api.adviceslip.com/advice/search/${query}`;
    console.log(url);
    fetch(url).then(res => res.json()).then(data => displayAdvice(data.slips)).catch(error => console.log(error))
}

const displayAdvice = (data) => {

    const adviceContainer = document.getElementById('advice-container');
    console.log(data);
    // const {advice, date} = data;
    adviceContainer.innerHTML = ''
    data.map(element => {
        console.log(element.advice);
        
        const div = document.createElement('div');
        div.style.transition = 'all 1s';
    
        div.innerHTML = `
    
<a href="#" class="block h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
    <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    <p></p>
    <hr class="py-2">
    <p>"${element.advice}"</p>
</blockquote>
</a>

    
    `
    adviceContainer.appendChild(div)
    });
    

}
document.getElementById('btn-search').addEventListener('click', (query)=>{
    console.log('hello');
    const searchElement = document.getElementById('input-search');
    const searchText =searchElement.value;
    searchElement.value = ''
    loadAdvice(searchText);
})
document.getElementById('mobile-search').addEventListener('click', (query)=>{
    console.log('hello');
    const searchElement = document.getElementById('input-mobile');
    const searchText =searchElement.value;
    searchElement.value = ''
    loadAdvice(searchText);
})


loadAdvice()
loadData();