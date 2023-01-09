export const body = async () => {
    const rezultatas = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const rezultatasObject = await rezultatas.text();

    console.log(rezultatasObject);

    return document.getElementById('main-par').textContent = rezultatasObject;
}