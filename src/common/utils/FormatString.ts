export const getInitials = (fullName: string): string => {
  const nameParts: string[] = fullName.split(" ");
  const firstLetterFirstName: string = nameParts[0].charAt(0);
  const lastName: string = nameParts[nameParts.length - 1];
  const firstLetterLastName: string = lastName.charAt(0);

  return firstLetterFirstName.toUpperCase() + firstLetterLastName.toUpperCase();
};
