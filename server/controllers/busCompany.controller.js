import BusCompany from '../models/BusCompany';

export const getAll = async (req, res) => {
  try {
    const [rows] = await BusCompany.getAll();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const [rows] = await BusCompany.getById(req.params.id);
    if (rows.length === 0) return res.status(404).json({ message: 'Không tìm thấy nhà xe' });
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    await BusCompany.create(req.body);
    res.status(201).json({ success: true, message: 'Thêm nhà xe thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const [result] = await BusCompany.update(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy nhà xe' });
    res.json({ success: true, message: 'Cập nhật nhà xe thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const [result] = await BusCompany.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy nhà xe' });
    res.json({ success: true, message: 'Xóa nhà xe thành công' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};