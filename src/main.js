import { createApp } from 'vue'; // 1. createApp импортируем из vue
import App from './App'; //3. импортируем App компонент в main.js


createApp(App) // 2. с помощью {createApp} создаем экземпляр приложение App
.mount('#app'); // 4. монтируем область видимости в #app
