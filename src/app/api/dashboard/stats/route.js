import connectDB from '@/lib/mongodb';
import { verifyToken } from '@/middleware/auth';
import Contact from '@/models/Contact';
import Newsletter from '@/models/Newsletter';
import Order from '@/models/Order';
import Expense from '@/models/Expense';
import Invoice from '@/models/Invoice';
import Sale from '@/models/Sale';
import EmployeeSalary from '@/models/EmployeeSalary';
import Blog from '@/models/Blog';
import Portfolio from '@/models/Portfolio';
import Project from '@/models/Project';
import Employee from '@/models/Employee';
import { NextResponse } from 'next/server';
import { corsHeaders, handleCORS } from '@/lib/cors';

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders(),
  });
}

export async function GET(request) {
  try {
    const corsResponse = handleCORS(request);
    if (corsResponse) return corsResponse;

    await connectDB();
    await verifyToken(request);

    const [
      totalOrders,
      totalRevenue,
      totalContacts,
      totalSubscribers,
      recentOrders,
      totalExpenses,
      totalExpenseAmount,
      totalInvoices,
      pendingInvoices,
      totalSales,
      totalSalesAmount,
      totalEmployeeSalaries,
      totalBlogs,
      totalPortfolios,
      totalProjects,
      activeProjects,
      totalEmployees,
      activeEmployees,
    ] = await Promise.all([
      Order.countDocuments(),
      Order.aggregate([
        { $match: { status: { $ne: 'cancelled' } } },
        { $group: { _id: null, total: { $sum: '$total' } } },
      ]),
      Contact.countDocuments(),
      Newsletter.countDocuments({ isActive: true }),
      Order.find().sort({ createdAt: -1 }).limit(10),
      Expense.countDocuments(),
      Expense.aggregate([
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]),
      Invoice.countDocuments(),
      Invoice.countDocuments({ status: 'Pending' }),
      Sale.countDocuments(),
      Sale.aggregate([
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ]),
      EmployeeSalary.countDocuments(),
      Blog.countDocuments(),
      Portfolio.countDocuments({ isActive: true }),
      Project.countDocuments(),
      Project.countDocuments({ status: 'In Progress' }),
      Employee.countDocuments(),
      Employee.countDocuments({ status: 'Active' }),
    ]);

    const revenue = totalRevenue[0]?.total || 0;
    const expenseAmount = totalExpenseAmount[0]?.total || 0;
    const salesAmount = totalSalesAmount[0]?.total || 0;

    return NextResponse.json({
      success: true,
      stats: {
        totalOrders,
        totalRevenue: revenue,
        totalContacts,
        totalSubscribers,
        recentOrders,
        totalExpenses,
        totalExpenseAmount: expenseAmount,
        totalInvoices,
        pendingInvoices,
        totalSales,
        totalSalesAmount: salesAmount,
        totalEmployeeSalaries,
        totalBlogs,
        totalPortfolios,
        totalProjects,
        activeProjects,
        totalEmployeesCount: totalEmployees,
        activeEmployeesCount: activeEmployees,
      },
    }, {
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500, headers: corsHeaders() }
    );
  }
}

