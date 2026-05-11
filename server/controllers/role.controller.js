import Role from '../models/Role';

export const getAll = async (req, res) => {
  try {
    const [rows] = await Role.getAll();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const [rows] = await Role.getById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Không tìm thấy role' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    await Role.create(req.body);
    res.status(201).json({ success: true, message: 'Tạo role thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const [result] = await Role.update(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy role' });
    res.json({ success: true, message: 'Cập nhật role thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const [result] = await Role.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy role' });
    res.json({ success: true, message: 'Xóa role thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};