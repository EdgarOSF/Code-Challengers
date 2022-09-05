const logs = ['88 99 200', '88 99 300', '99 32 100', '12 12 15'];
const threshold = 2;

function processLogs(logs, threshold) {
  const registers = getRegisters(logs);
  const usersTransactionsId = getListOfUsers(registers);
  const usersTransactions = calculateTrasactions(usersTransactionsId, registers);
  const filteredUsers = filterUsers(usersTransactions, threshold);
  return filteredUsers;
}

function getRegisters(log) {
  const registers = log.map((registro) => {
    const [id1, id2] = registro.split(' ');
    return [id1, id2];
  });
  return registers;
}

function getListOfUsers(registers) {
  const registersFlat = registers.flat();
  const usersId = [...new Set(registersFlat)];
  return usersId;
}

function calculateTrasactions(listOfUsers, registros) {
  let transactionForUser = 0;
  const usersOrdered = ascendingOrder(listOfUsers);
  const transactionsPerUser = usersOrdered.map((user) => {
    transactionForUser = 0;
    registros.forEach((element) => {
      if (element.includes(user)) transactionForUser++;
    });
    return [user, transactionForUser];
  });
  return transactionsPerUser;
}

function ascendingOrder(listOfUsersId) {
  return listOfUsersId.sort();
}

function filterUsers(registers, threshold) {
  const users = [];
  registers.forEach((register) => {
    if (register[1] >= threshold) users.push(register[0]);
  });
  return users;
}

console.log(processLogs(logs, threshold));
