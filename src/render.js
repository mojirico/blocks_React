var Compornent = React.createClass({
	render: function(){
		return (
			<div className="compornent">
				Hello World!!
			</div>
		);
	}
});
ReactDOM.render(
	<Compornent />,
	document.getElementById('content')
);