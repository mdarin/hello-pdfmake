// урок
// https://www.youtube.com/watch?v=K4RxSioS6Dw
// 



//let paymentOrd

// doc
// http://pdfmake.org/#/gettingstarted
//

let docDefinition = {
  content: [
 		/*
		// if you don't need styles, you can use a simple string to define a paragraph
    'Стандартный параграф, испльзует насройки по умолчанию',    

		// using a { text: '...' } object lets you set styling properties
    { text: 'А этот уже написан шрифтом поболее', fontSize: 15 },


		{ table: {
        // headers are automatically repeated if the table spans over multiple pages
        // you can declare how many rows should be treated as headers
        headerRows: 1,
        widths: [ '*', 'auto', 100, '*' ],

        body: [
          [ 'Первый', 'Второй', 'Третий', 'И последний' ],
          [ 'Значение 1', 'Значение 2', 'Значение 3', 'Значение 4' ],
          [ { text: 'Жирненький', bold: true, border:[false,false,false,false] }, 'Знач 2', 'Знач 3', 'Знач 4' ]
        ]
      } 
		},

 		
		
		{ text: [
         'В сводю очередь это параграф описам массивом элементов ',
         { text: 'для того, чтобы можно быоло выделить вот это бОльшим шрифтом ', fontSize: 15 },
         'и вернуть всё на свои места.'
       ] 
		},
		*/

	/*
		// таблица верхняя
		{
			//style: 'tableExample',
			//color: '#444',
			table: {
				widths: [200, 'auto', 'auto'],
				headerRows: 2,
				// keepWithHeaderRows: 1,
				body: [
					[{text: 'Header with Colspan = 2', colSpan: 2, alignment: 'center'}, {}, {text: 'Header 3', alignment: 'center'}],
					[{text: 'Header 1', alignment: 'center'}, {text: 'Header 2', alignment: 'center'}, {text: 'Header 3', alignment: 'center'}],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					[{rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}, 'Sample value 2', 'Sample value 3'],
					['', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3'],
					['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
					['Sample value 1', '', ''],
				]
			}
		},
	*/
		/*{
			table: {
				widths: ['auto', 'auto', 'auto'],
				body: [		
					[{rowSpan: 2, text: '---<БАНК>---\nБанк получателя'}, 'БИК', {rowSpan: 2, text: '---<БИК>---\n---<KC>---'}],
					[{}, 'Сч.№', {}],
					['ИНН' + '----<ИНН>---' + 'КПП' + '---<КПП>---', {rowSpan: 3, text: 'Сч.№'}, {rowSpan: 3, text: '---<РС>---'}],
					[{rowSpan: 2, text: '---<ПОЛУЧАТЕЛЬ>---\nПолучатель'}, '', ''],				
					['', '', ''],
				]
			}
		},*/

		//an array of 4 booleans for left border, top border, right border, bottom border.',
		//border: [false, true, false, false]

		{
			table: {
				widths: ['*', 'auto', '*'],
				body: [		
					[{border: [true, true, true, false], text: 'ПАО СБЕРБАНГК Г.МОСКВА'}, 'БИК', {border: [true, true, true, false], text: '934867578'}],
					[{border: [true, false, true, false], text: 'Банк получателя'}, 'Сч.№', {border: [true, false, true, false], text: '3058798567688965346'}],
					[{text:'ИНН ' + '23908572367' + ' КПП ' + '8736528765'}, 'Сч.№', { border: [true, true, true, false], text: '40565468789756987678'}],
					[{border: [true, false, true, false], text: 'ОБЩЕСТВО C ОГРАНИЧЕННОЙ ОТВЕТСВЕННОСТЬЮ \"Грузовички\"'}, {border: [true, false, true, false], text: ''}, {border: [true, false, true,false], text: ''}],				
					[{border: [true, false, true, true], text: 'Получатель'}, {border: [true, false, true, true], text:''}, {border: [true, false, true, true], text:''}],
				]
			}
		},



		// Счёт на оплату
		/*
		{ text: 
				'Cчет на оплату №' 
			//+ paymentOrd 
			+ (function(length = 20, c = ' ') { let line = ''; for (let i = 0; i < length; i++) line = line + c; return line;}())	               			
			+ 'от'
			+ (function(length = 20, c = ' ') { let line = ''; for (let i = 0; i < length; i++) line = line + c; return line;}())	               
			+ '20'
			+ (function(length = 8, c = ' ') { let line = ''; for (let i = 0; i < length; i++) line = line + c; return line;}())    
			+ 'г.', 
				fontSize: 20, 
				bold: true },

		// жираная линия
		{ text:
			// length - длина линии в знакоместах
			// c - символ помещаемый в знакоместо
			(function(length = 72, c = '_') { let line = ''; for (let i = 0; i < length; i++) line = line + c; return line;}()),		
			fontSize: 15,
			bold: true 
		},
		*/
		{
			table: {
				widths: ['auto', 'auto', '*'],
				body: [		
					[{border: [false, false, false, true],  bold: true, fontSize: 16, text: 'Счёт на оплату № В-3451'}, 
					{border: [false, false, false, true], bold: true, fontSize: 16, text: 'от 30 мартабря'} , 
					{border: [false, false, false, true], bold: true, fontSize: 16, text: '20' + 'затёртого' + ' г.'}],
				]
			}
		},
		

		{
			table: {
				widths: ['auto', 'auto'],
				body: [		
					[{border: [false, false, false, false], text: 'Плательщик\n(Исполнитель):'}, 
					{border: [false, false, false, false], text: 'ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО \"Трахатория\"'}],
					[{border: [false, false, false, false], text: 'Получатель\n(Закаччик):'}, 
					{border: [false, false, false, false], text: 'ОБЩЕСТВО C ОГРАНИЧЕННОЙ ОТВЕТСВЕННОСТЬЮ \"Грузовички\"'}],
					[{border: [false, false, false, false], text: 'Основание:'}, 
					{border: [false, false, false, false], text: ''}],
				]
			}
		},
		
		{
			table: {
				widths: ['auto', '*', 'auto', 'auto','auto', 'auto'],
				headerRows: 1,				
				body: [		
					['№',{alignment: 'center', text: 'Товары(работы,услуги)'},'Кол-во','Ед.','Цена','Сумма'],
					['1',{alignment: 'center', text: 'Верификация'},'','шт','0,01','0,01'],
					[{border: [false, false, false, false],text: ''},{border: [false, false, false, false],text: ''}, {border: [false, false, false, false],text: ''},{border: [false, false, false, false],bold: true, text: 'Итого:', colSpan: 2, alignment: 'right'},{border: [false, false, false, false],text: ''},{border: [false, false, false, false],text: '0,01'}],
					[{border: [false, false, false, false],text: ''},{border: [false, false, false, false],text: ''},{border: [false, false, false, false],text: ''},{border: [false, false, false, false],bold: true, text: 'Без налога(НДС)', colSpan: 2, alignment: 'right'},{border: [false, false, false, false],text: ''},{border: [false, false, false, false],text: '-'}],
					[{border: [false, false, false, false],text: ''},{border: [false, false, false, false],text: ''},{border: [false, false, false, false],text: ''},{border: [false, false, false, false],bold: true, text: 'Всего к оплате:', colSpan: 2, alignment: 'right'},{border: [false, false, false, false],text: ''},{border: [false, false, false, false],text: '0,01'}],
				]
			}
		},


		{ text: [
        'Всего наименований 1, на сумму 0,01 руб\n',
        { bold: true, text: 'Ноль рублей 01 копейка\n' },
				'\n',        
				'Внимание!\n',
				'Оплата данного счета означает согласие с условиями поставки товара.\n',
				'Уведомление об оплате обязательно, в противном случае не гарантируется наличие товара на складе.\n',
				'Товар отпускается по факту прихода денег на р/с Поставщика, самовывозом, при наличии доверенности и паспорта.\n',
       ] 
		},

		{
			table: {
				widths: ['auto', '*', 'auto', '*'],
				body: [		
					[{border: [false, true, false, false], bold: true, text: 'Рководитель'}, 
					{border: [false, true, false, false], bold: true, text: 'Рулевич К.Ю.'},
					{border: [false, true, false, false], bold: true, text: 'Бухгалтер'}, 
					{border: [false, true, false, false], bold: true, text: 'Счетоводова Г.А.'}],
				]
			}
		},
	
  ]
};
//(function () {
//alert('Я функция, и я запустилась.');
//}());

// отдать на загрузку документ
pdfMake.createPdf(docDefinition).download("invoice.pdf");
