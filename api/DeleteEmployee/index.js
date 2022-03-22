/**
 * file: DeleteEmployee/index.js
 * date: 03/20/2022
 * description: file responsible for delete an 'Employee' by Id
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

//const prisma = require('../shared/prisma');
const handleError = require('../shared/error');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = async function (context, req) {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.delete({
      where: {
        employee_id: String(id),
      },
    });

    return {
      status: 200,
      body: employee,
    };
  } catch (error) {
    context.log('Error to delete an Employee.');
    return handleError(500, error, context);
  }
};