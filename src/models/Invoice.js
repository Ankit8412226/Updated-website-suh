import mongoose from 'mongoose';

const invoiceSchema = new mongoose.Schema({
  invoiceNumber: {
    type: String,
    required: true,
    unique: true,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
  projectCode: String,
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  clientPhone: {
    type: String,
    required: true,
  },
  clientAddress: {
    type: String,
    required: true,
  },
  services: [{
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    unit: {
      type: String,
      default: 'hours',
      enum: ['hours', 'days', 'items', 'project'],
    },
    rate: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  }],
  subtotal: {
    type: Number,
    required: true,
  },
  taxRate: {
    type: Number,
    default: 18, // GST 18%
  },
  taxAmount: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Draft', 'Sent', 'Pending', 'Paid', 'Overdue', 'Cancelled'],
    default: 'Draft',
  },
  paymentDate: Date,
  paymentMethod: String,
  notes: String,
  invoiceDate: {
    type: Date,
    default: Date.now,
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

invoiceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  if (!this.invoiceNumber) {
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    this.invoiceNumber = `INV-${year}${month}-${random}`;
  }

  // Calculate totals if services exist
  if (this.services && this.services.length > 0) {
    this.subtotal = this.services.reduce((sum, service) => sum + (service.amount || 0), 0);
    this.taxAmount = ((this.subtotal - (this.discount || 0)) * (this.taxRate || 0)) / 100;
    this.total = this.subtotal - (this.discount || 0) + this.taxAmount;
  }

  // Check if overdue
  if (this.status === 'Pending' && this.dueDate && new Date() > this.dueDate) {
    this.status = 'Overdue';
  }

  next();
});

export default mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);

