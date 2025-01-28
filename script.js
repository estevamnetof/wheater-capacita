const apiKey = "eff6d5c6ee9e7fb761204b555b554632";
const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Por favor digite o nome de uma cidade!')
    }
});

async function fetchWeather(city) {
    const url = `${apiBase}?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = `
        <h2>Tempo em ${data.name}</h2>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Sensação térmica: ${data.main.feels_like}°C</p>
        <p>Umidade: ${data.main.humidity}%</p>
    `;

    document.getElementById('weatherResult').innerHTML = weatherInfo;
};