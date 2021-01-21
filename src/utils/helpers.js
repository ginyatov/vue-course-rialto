export const isCorrectDate = (date) => {
  const currentDate = new Date();
  const selectDate = new Date(date);

  return selectDate >= currentDate;
};

export const validNames = {
  active: "Активен",
  pending: "Выполняется",
  done: "Выполнен",
  cancelled: "Отменен",
  overdue: "Просроченная",
};

export const statusName = (statusType) => validNames[statusType] || "Активен";
