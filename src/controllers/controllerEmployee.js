const { pool } = require("../db/dbmysql.js");

const getEmployeeOnlyController = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query(`SELECT * FROM employee WHERE id = ${id}`); //tambien se puede escribir: pool.query('SELECT * FROM employee WHERE id = ${id}', [id])
    if (rows.length <= 0) return res.json({ msg: "employee not found" });
    console.log(rows);
    res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ msg: "something goes wrong" });
  }
};

const getEmployeeController = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    console.log("dentro del get");
    res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ msg: "something goes wrong" });
  }
};

const postEmployeeController = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?,?)",
      [name, salary]
    );
    console.log("dentro del post");
    res.status(200).json({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ msg: "something goes wrong" });
  }
};

const putEmployeeController = async (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );
    console.log(result);
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: "Employee not found" });
    }
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ msg: "something goes wrong" });
  }
};

const deleteEmployeeController = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query(`DELETE FROM employee WHERE id = ${id}`); //tambien se puede escribir: pool.query('DELETE * FROM employee WHERE id = ${id}', [id])
    if (result.affectedRows <= 0) {
      return res.status(404).json({ msg: "Employee not found" }); // error 204: indica que todo salio bien, pero no devuleve nada
    }
    console.log("dentro del delete");
    res.status(204).json({ result });
  } catch (error) {
    return res.status(500).json({ msg: "something goes wrong" });
  }
};

/* const patchEmployeeController = async (req, res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
    const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES (?,?)",
    [name, salary]
  ); 
  console.log("dentro del post");
  res.status(200).json({ id, name, salary });
}; */

module.exports = {
  getEmployeeController,
  getEmployeeOnlyController,
  postEmployeeController,
  putEmployeeController,
  deleteEmployeeController,
  // patchEmployeeController,
};
