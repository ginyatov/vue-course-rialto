export const isCorrectDate = (date: any) => {
  const currentDate = new Date();
  const selectDate = new Date(date);

  return selectDate >= currentDate;
};

export const validNames: any = {
  active: "Активен",
  pending: "Выполняется",
  done: "Выполнен",
  cancelled: "Отменен",
  overdue: "Просроченная",
};

export const statusName = (statusType: any) =>
  validNames[statusType] || "Активен";
