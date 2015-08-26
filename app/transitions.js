export default function(){
	this.transition(
		this.fromRoute('index'),
		this.toRoute('term.show'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('term.show'),
		this.toRoute('sub-term.show'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('sub-term.show'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);


	this.transition(
		this.fromRoute('index'),
		this.toRoute('post.show'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('sub-term.show'),
		this.toRoute('post.show'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.toModel(),
		this.fromModel(),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('term.show'),
		this.toRoute('post.show'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);
}

