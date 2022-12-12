var books = [{
	id: 1,
	title: 'Based Design Mobile Learning Course on Android',
	author: 'Liranti Rahmelina',
	isbn: "1978-0524-2528-6374"
},

{
	id: 2,
	title: 'Development of Sales Application Using QR Code',
	author: 'Ricky Akbar, Husnil Kamil',
	isbn: "1978-0524-2528-6374"
},

{
	id: 3,
	title: 'Perancangan dan Implementasi Web Service pada Aplikasi Permainan ',
	author: 'Gilang Arsya Priyatna Zaman',
	isbn: "1978-0524-2528-6374"
},

{
	id: 4,
	title: 'Perancangan Augmented Reality Media Markerless PoI',
	author: 'Abraham Christover Manuputty',
	isbn: "1978-0524-2528-6374"
},

{
	id: 5,
	title: 'Pengembangan SIG Berbasis Node.JS untuk Pemetaan Mesin dan Tracking',
	author: 'Rachmat Fajrin',
	isbn: "1978-0524-2528-6374"
}

]

new Vue({
el: '#app',
data: {
	message: 'Hello world',
	books: books,
	add: false,
	up: false,
	id: 6,
	title: '',
	author: '',
	isbn: '',
	idu: 0
},

methods: 
{
	Adding: function() 
	{
		this.add = true;
	},

	Upping: function(index) 
	{
		this.id = this.books[index].id,
			this.title = this.books[index].title,
			this.author = this.books[index].author,
			this.isbn = this.books[index].isbn,
			this.up = true;
		this.idu = this.id;
	},

	AddingJurnal: function() 
	{
		this.books.push({
			id: this.id++,
			title: this.title,
			author: this.author,
			isbn: this.isbn,
		});
		this.title = '',
			this.author = '',
			this.isbn = '',
			this.add = false;
	},
	
	UppingJurnal: function(id) 
	{
		for (var i = 0; i < this.books.length; i++) {
			if (id == this.books[i].id) {
				this.books.splice(i, 1, {
					id: id,
					title: this.title,
					author: this.author,
					isbn: this.isbn,
				});
				this.title = '',
					this.author = '',
					this.isbn = '',
					this.up = false;
				return;
			}
		}

	},
},
computed: 
{
	Add: function() 
	{
		return this.add;
	},
	Up: function() 
	{
		return this.up;
	}
}
});