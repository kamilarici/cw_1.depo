# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

useLocation hook'u, geçerli konumu bir nesne olarak döndürür. Bu nesne, konum URL'sini, konum yolunu, konum parametrelerini ve konum durumunu içerir.

const { pathname, search, hash,state } = useLocation();
Bu kod, pathname, search, state ve hash değişkenlerini ayarlar. pathname değişkeni konum URL'sinin yolunu içerir, search değişkeni konum URL'sinin arama parametrelerini içerir ve hash değişkeni konum URL'sinin hash parametresini içerir. state değişkeni useNavigate ile yönlendirme yapılırken veri gönderildiyse o veriyi içerir.

## pathname: Konum URL'sinin yolunu içerir. Örneğin, eğer URL "https://www.example.com/products" ise, pathname "/products" olacaktır.

## search: Konum URL'sindeki sorgu parametrelerini içerir. Örneğin, eğer URL "https://www.example.com/products?id=123&category=electronics" ise, search "?id=123&category=electronics" olacaktır.

# hash: Konum URL'sindeki "hash" kısmını içerir. Hash genellikle sayfanın belirli bir bölümüne doğrudan bağlantı yapmak için kullanılır. Örneğin, eğer URL "https://www.example.com/products#details" ise, hash "#details" olacaktır.

## state: Konum nesnesinin bir özelliği olarak mevcut durumu içerir. Bu durum, genellikle geçmiş yönlendirmeleri veya ekstra veri taşımak için kullanılır.
