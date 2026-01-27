import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://negikartik780_db_user:sUQLhMU8scKGjpRg@cluster0.d7dxcbn.mongodb.net/Todo?retryWrites=true&w=majority")
console.log("Connected to MongoDB");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model("Todo", todoSchema);

export { Todo };

