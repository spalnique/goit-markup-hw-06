(() => {
	const refs_modal = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		body: document.querySelector("body"),
	};

	refs_modal.openModalBtn.addEventListener("click", toggleModal);
	refs_modal.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs_modal.modal.classList.toggle("is-hidden");
		refs_modal.body.classList.toggle("no-scroll");
	}
})();

(() => {
	const refs_menu = {
		openMenuBtn: document.querySelector("[data-menu-open]"),
		closeMenuBtn: document.querySelector("[data-menu-close]"),
		menu: document.querySelector("[data-menu]"),
		body: document.querySelector("body"),
	};

	refs_menu.openMenuBtn.addEventListener("click", toggleMenu);
	refs_menu.closeMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs_menu.menu.classList.toggle("is-hidden");
		refs_menu.body.classList.toggle("no-scroll");
	}
})();
