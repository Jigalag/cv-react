export default function (context = this, functionName, args = []) {
    return () => {
        functionName.apply(context, args);
    }
}