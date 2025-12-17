import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
    enum: ['Development', 'Design', 'DevOps', 'QA', 'Management', 'Sales', 'Support', 'Other'],
  },
  skills: [String],
  joiningDate: {
    type: Date,
    required: true,
  },
  employeeType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Intern'],
    default: 'Full-time',
  },
  status: {
    type: String,
    enum: ['Active', 'On Leave', 'Terminated', 'Resigned'],
    default: 'Active',
  },
  address: String,
  emergencyContact: {
    name: String,
    phone: String,
    relation: String,
  },
  userAccount: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

employeeSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  if (!this.employeeId) {
    const prefix = this.department.substring(0, 2).toUpperCase();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    this.employeeId = `${prefix}-${random}`;
  }
  next();
});

export default mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

