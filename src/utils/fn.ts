export function formatDay(dateString: any) {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getUTCFullYear();

  return `${day}, ${month}. ${year}`;
}

export const logoutUser = () => {
  localStorage.removeItem("leapforce-token");
  localStorage.removeItem("leapforce-profile");
  window.location.reload();
};
