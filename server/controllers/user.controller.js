import User from '../models/User';

export const getAll = async (req, res) => {
  try {
    const [rows] = await User.getAll();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const [rows] = await User.getById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Không tìm thấy user' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ success: true, message: 'User created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const [result] = await User.update(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy user' });
    res.json({ success: true, message: 'User updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const [result] = await User.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy user' });
    res.json({ success: true, message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};