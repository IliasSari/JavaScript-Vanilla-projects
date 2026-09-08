const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "role", label: "Speciality" },
    { key: "email", label: "Email" },
    { key: "actions", label: "Actions" }
];

let employees = [];

// Elements
const tableHeaderEl = document.getElementById('tableHeader');
const employeeTableBodyEl = document.getElementById('employeeTableBody');
const searchInputEl = document.getElementById('searchInput');
const totalCountElementEl = document.getElementById('totalCount');
const noResultsElementEl = document.getElementById('noResults');
const addEmployeeFormEl = document.getElementById('addEmployeeForm');
const modalTitleEl = document.getElementById('modalTitle');
const editingIdInput = document.getElementById('editingId');

// Modal Elements
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const employeeModal = document.getElementById('employeeModal');

// Reset Form
function resetForm() {
    addEmployeeFormEl.reset();
    editingIdInput.value = '';
}

// Modal Toggle
if (openModalBtn && closeModalBtn && employeeModal) {
    openModalBtn.addEventListener('click', () => {
        resetForm();
        if (modalTitleEl) modalTitleEl.textContent = "Add new employee";
        employeeModal.classList.remove('hidden');
    });
    
    closeModalBtn.addEventListener('click', () => {
        employeeModal.classList.add('hidden');
        resetForm();
    });
}

// Render Headers
function renderHeaders() {
    if (!tableHeaderEl) return;
    tableHeaderEl.innerHTML = '';
    
    columns.forEach(col => {
        const th = document.createElement('th');
        th.textContent = col.label;
        tableHeaderEl.appendChild(th);
    });
}

// Render Employees
function renderEmployees(dataToRender) {
    if (!employeeTableBodyEl) return;
    employeeTableBodyEl.innerHTML = '';

    if (dataToRender.length === 0) {
        if (noResultsElementEl) noResultsElementEl.classList.remove('hidden');
    } else {
        if (noResultsElementEl) noResultsElementEl.classList.add('hidden');
        
        dataToRender.forEach(emp => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.role}</td>
                <td>${emp.email}</td>
                <td>
                    <button class="btn btn-warning" onclick="window.editEmployee(${emp.id})">Edit</button>
                    <button class="btn btn-danger" onclick="window.deleteEmployee(${emp.id})">Delete</button>
                </td>
            `;
            employeeTableBodyEl.appendChild(tr);
        });
    }

    if (totalCountElementEl) {
        totalCountElementEl.textContent = employees.length;
    }
}

// Global functions for inline onclick handlers
window.editEmployee = function(id) {
    const empToEdit = employees.find(emp => emp.id === id);
    if (!empToEdit) return;

    document.getElementById('name').value = empToEdit.name;
    document.getElementById('role').value = empToEdit.role;
    document.getElementById('email').value = empToEdit.email;
    editingIdInput.value = empToEdit.id;

    if (modalTitleEl) modalTitleEl.textContent = "Edit employee";
    if (employeeModal) employeeModal.classList.remove('hidden');
};

window.deleteEmployee = function(id) {
    employees = employees.filter(emp => emp.id !== id);
    applySearchFilter();
};

// Add or Edit Submission
if (addEmployeeFormEl) {
    addEmployeeFormEl.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameValue = document.getElementById('name').value;
        const roleValue = document.getElementById('role').value;
        const emailValue = document.getElementById('email').value;
        const editingId = editingIdInput.value;

        if (editingId) {
            // Update existing employee
            employees = employees.map(emp => {
                if (emp.id === Number(editingId)) {
                    return { ...emp, name: nameValue, role: roleValue, email: emailValue };
                }
                return emp;
            });
        } else {
            // Add new employee
            const newEmployee = {
                id: Date.now(),
                name: nameValue,
                role: roleValue,
                email: emailValue
            };
            employees.push(newEmployee);
        }

        resetForm();
        if (employeeModal) employeeModal.classList.add('hidden');
        applySearchFilter();
    });
}

// Search Filter
if (searchInputEl) {
    searchInputEl.addEventListener('input', () => applySearchFilter());
}

function applySearchFilter() {
    const searchTerm = searchInputEl ? searchInputEl.value.toLowerCase() : '';
    const filtered = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchTerm) || 
        emp.role.toLowerCase().includes(searchTerm)
    );
    renderEmployees(filtered);
}

// Init
renderHeaders();
renderEmployees(employees);