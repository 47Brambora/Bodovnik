// Render tabulek, vstupních polí a přepínání záložek

const btnEditMembers = document.getElementById('btn-edit-mem');
const welcomeMsg = document.getElementById('welcome-msg');
const editMembers = document.getElementById('edit-members');
const btnToWelcomePage = document.getElementById('to-welcome-page');
const addMember = document.getElementById('add-member');
const editMembersAddMember = document.getElementById('btn-add-member');
const hideEditMembersAddMember = document.getElementById('btn-hide-add-member');


btnEditMembers.addEventListener('click', () => {
    welcomeMsg.classList.add('hidden');
    editMembers.classList.remove('hidden');
});

editMembersAddMember.addEventListener('click', () => {
    addMember.classList.remove('hidden');
});
hideEditMembersAddMember.addEventListener('click', () => {
    addMember.classList.add('hidden');
});

btnToWelcomePage.addEventListener('click', () => {
    welcomeMsg.classList.remove('hidden');
    editMembers.classList.add('hidden');
});
