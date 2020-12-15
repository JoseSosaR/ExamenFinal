// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Coffee Shop',
	dialog: {
		title: 'Coffee Shop',
		buttonOk: 'Aceptar',
  	},
	routes: [
		
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path:'/destino1/',
    	url: 'destino1.html',
    	name: 'destino1',
		},
		{
		path: '/destino2/',
    	url: 'destino2.html',
    	name: 'destino2',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/formulario2/',
    	url: 'formulario2.html',
    	name: 'formulario2',
		
		},
		{
		path: '/formulario3/',
    	url: 'formulario3.html',
    	name: 'formulario3',
		
		}
		,
		{
		path: '/formulario4/',
    	url: 'formulario4.html',
    	name: 'formulario4',
		
		}
		,
		{
		path: '/about_us/',
    	url: 'about_us.html',
    	name: 'about_us',
		
		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

