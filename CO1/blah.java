class CircularQueue {

    int[] a = new int[5];   // fixed size
    int front = -1;
    int rear = -1;
    int n = 5;

    // ENQUEUE
    void enqueue(int x) {
        if ((rear + 1) % n == front) {
            System.out.println("Overflow");
        }
        else if (front == -1) {   // empty queue
            front = rear = 0;
            a[rear] = x;
        }
        else {
            rear = (rear + 1) % n;
            a[rear] = x;
        }
        System.out.println("Inserted: " + x);
    }

    // DEQUEUE
    int dequeue() {
        if (front == -1) {
            System.out.println("Underflow");
            return -1;
        }

        int x = a[front];

        if (front == rear) {   // only one element
            front = rear = -1;
        }
        else {
            front = (front + 1) % n;
        }

        System.out.println("Deleted: " + x);
        return x;
    }

    public static void main(String[] args) {
        CircularQueue q = new CircularQueue();

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        q.enqueue(40);
        q.enqueue(50);

        q.dequeue();
        q.dequeue();

        q.enqueue(60);  // shows wrap-around
    }
}