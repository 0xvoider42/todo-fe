import { Button, useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      color="secondary"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "dark" : "light"}
    </Button>
  );
};

export default ThemeSwitcher;
