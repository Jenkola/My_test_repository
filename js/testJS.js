//Test javascript file adding some feature...

(function(root) {

	var model = {

		listItems: [],

		addItem: function(item) {
			this.listItems.push(item);
		}

	};

	var controller = {

		updateParagraph: function() {
			var textForm = document.getElementById('testInput');
			var textFormValue = textForm.value;
			model.addItem(textFormValue);
			textForm.value = "";
			view.render();
		},
	};


	var view = {

		render: function() {
			var mainList = document.getElementById('mainlist');
			mainlist.innerHTML = '';

			model.listItems.forEach(function(item) {
				var newListElement = document.createElement('li');
				newListElement.textContent = item;
				mainList.appendChild(newListElement);
			});

		},


		setUpEventListeners: function () {

			var submitButton = document.getElementById('testSubmit');
			submitButton.addEventListener('click', function() {
				controller.updateParagraph();
			});
		}


	};

	view.setUpEventListeners();

})(this);