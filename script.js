const createBtn = document.querySelector('.location__createBtn'),
	popupCreate = document.querySelector('.popup__create'),
	popupBtns = document.querySelectorAll('.popup__btns button'),
	switchBtn = document.querySelectorAll('.switch-btn'),
	locationMenu = document.querySelector('.location'),
	popupEdit = document.querySelector('.popup__edit'),
	popupBtns3 = document.querySelectorAll('.popup__btns3 button');
switchBtn.forEach((el)=>
{
	el.addEventListener('click',function ()
	{
		this.classList.toggle('switch-on');
	});	
})
createBtn.addEventListener('click', function()
{
	popupCreate.classList.add('active')
	document.body.style.overflow = 'hidden';
})
popupBtns.forEach((el)=>
{
	el.addEventListener('click', function()
	{
		popupCreate.classList.remove('active')
		document.body.style.overflow = '';
	})
})
function show()
{
	locationMenu.classList.toggle('active');
}
function edit()
{
	popupEdit.classList.add('active')
	document.body.style.overflow = 'hidden';
}
popupBtns3.forEach((el)=>
{
	el.addEventListener('click', function()
	{
		popupEdit.classList.remove('active')
		document.body.style.overflow = '';
	})
})