import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type ButtonProps = PressableProps & {
  children: React.ReactNode;
};

export function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonWrapper, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    color: 'white',
  }
});