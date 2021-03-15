const fake_db = require('../fake_db');

function create_id(length) {
    var id = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characters_length = characters.length;
    for (var i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters_length));
    }
    return id;
}

module.exports = {
    get_employees(req, res) {
        res.json({ message: 'Employees', employees: fake_db });
    },

    create_employee(req, res) {
        const { name, birth_date, gender, email, cpf, start_date, team } = req.body;

        const id = create_id(8);
        const new_employee = { id, name, birth_date, gender, email, cpf, start_date, team };
        fake_db.push(new_employee);
        res.json({ message: 'New employee', new_employee });
    },

    get_employee(req, res) {
        const { id } = req.params;
        const employee = fake_db.filter(employee => employee.id === id);
        res.json({ message: 'Employee', employee });
    },

    update_employee(req, res) {
        const { id } = req.params;
        const { name, birth_date, gender, email, cpf, start_date, team } = req.body;

        const updated_employee = { id, name, birth_date, gender, email, cpf, start_date, team };

        const found_index = fake_db.findIndex(employee => employee.id === id);

        fake_db[found_index] = updated_employee;
        res.json({ message: 'Updated employee', updated_employee });
    },

    delete_employee(req, res) {
        const { id } = req.params;

        const found_index = fake_db.findIndex(employee => employee.id === id);

        const deleted_employee = fake_db[found_index];

        fake_db.splice(found_index, 1);

        res.json({ message: 'Deleted employee', employee: deleted_employee });
    }
}