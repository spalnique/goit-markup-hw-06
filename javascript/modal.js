(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		body: document.querySelector("body"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		refs.body.classList.toggle("no-scroll");
	}
})();

(() => {
	const refs = {
		openMenuBtn: document.querySelector("[data-menu-open]"),
		closeMenuBtn: document.querySelector("[data-menu-close]"),
		menu: document.querySelector("[data-menu]"),
		// body: document.querySelector("body"),
	};

	refs.openMenuBtn.addEventListener("click", toggleMenu);
	refs.closeMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.menu.classList.toggle("is-hidden");
		// refs.body.classList.toggle("no-scroll");
	}
})();
