---
title: Review Of "Why Machines Learn" by Anil Ananthaswamy
excerpt: My thoughts after reading "Why Machines Learn", a book about the core concepts of ML and deep neural networks.
publishDate: 'June 30 2025'
tags:
  - Learning Journey
  - Early career
  - Review
---

"Why Machines Learn: The Elegant Math Behind Modern AI" is a book by Anil Ananthaswamy that covers the fundamentals of traditional machine learning algorithms and deep learning. It combines mathematical explanations with historical context, and the chapters of the book are (more or less) written in chronological order, which allows to appreciate the evolution of machine learning throughout the chapters.

## Diving into the math behind Machine Learning

I’ve written detailed notes for each chapter, which you can find [in this repo](https://github.com/joseantonio002/My-summary-of-Why-Machines-Learn). In those notes, I summarized each chapter along with the key concepts I learned, so I won’t go into too much detail here. Instead, here’s a (very) brief summary of each chapter:

1. Desperately Seeking Patterns
    1. ML consist in finding patterns in data
    2. The Perceptron, first artificial neuron, as long as the data is linearly separable, a single layer of perceptrons will always find a linearly separating hyperplane, if the data are linearly separable
2. We Are All Just Numbers Here…
    1. Math behind the perceptron (vectors, dot product, hyperplane...). If we think of the weights as a vector that represents the hyperplane, then what the perceptron does is a dot product of the input with the weight vector, so you know in wich side of the hyperplane a data vector lands
    2. Training algorithm for the perceptron, checks if every data point is in its correspondient side of the hyperplane
3. The Bottom of the Bowl
    1. Gradient descend, algorithm to mininize a derivable function. The gradient is a vector that points in the direction of fastest increase, so we "travel" against the gradient to find a minimum
    2. LMS algorithm, the gradient is calculated by doing the partial derivatives of each variable in the function, to avoid this we take the gradient as the gradient of the error function for a single data point
4. In All Probability
    1. Underlying distribution of data, ML models asume the test and train data are from the same distribution
    2. Bayes optimal classifier, to apply this algorithm you would need the real underlying distribution of the data ()
    3. Naive bayes, Instead of trying to find P([x1, x2, x3..., xn], y) (Bayes Optimal), we assume that all features are sampled from their own distributions independently of one another
5. Birds of a Feather
    1. Euclidean or Manhattan distance to measure distance (similarity) between data points
    2. K Nearest Neighbor, a classification algorithm that classifies a data point based on the k nearest points
    3. The curse of dimensionality, the more features our data has, the harder it is for ML algorithms to find patterns in the data/similar datapoints
6. There’s Magic in Them Matrices
    1. Eigen vectors and eigen values
    2. The covariance matrix is a square symmetric matrix where the diagonal is the variance of each feature, and the off-diagonal elements are the covariance of each pair of features
    3. Principal Component Analysis (PCA) is a method to reduce the dimensionality of data based on the covariance matrix
7. The Great Kernel Rope Trick
    1. Vapnik created an algorithm that finds the optimal separating hyperplane, to do this it finds the hyperplane that maximizes the margins between the two clusters of data, using the closest data points for each cluster as margin (called support vectors since the data points are vectors). The hyperplane is the line that goes through the middle of the path. However this algorithm only worked with linearly separable data
    2. We can create new features in the data so it becomes linearly separable (data with infinite features will always have a linearly separating hyperplane)
    3. To create new features and up the number of dimensions there are mappings that transform the low-dimension vector into a high-dimension vector, xj → φ(xj). If we up the dimensions using one of this mappings, then we have a function (called kernel function) that K(xi, xj) → φ(xi). φ(xj).
8. With a Little Help from Physics
    1. Hopfield networks are a special type of network that can store memories (If you have n neurons, the network can store at most 0.14×n memories), and then given a hint of one of those memories as an input, the network will output that memory
9. The Man Who Set Back Deep Learning (Not Really)
    1. Multi-Layer Perceptron architecture (input, hidden and output layers, connections, weights as matrix...)
    2. A network with a single hidden layer with enoughs neurons can approximate any function (visual explanation using sigmoid as activation function)
10. The Algorithm that Put Paid to a Persistent Myth
    1. Backpropagation algorithm, calculate the error for an input (output - expected value). This error is a function of all the weights of the network, you can minimize it using gradient descent. Find the gradient of the error (as a function of the weights, meaning the input of the function are the weights and bias and everything else is fixed) and take a small step in the opposite direction by updating each weight by a tiny amount
    2. We use the chain rule to avoid having to calculate the partial derivatives of the gradient
11. The Eyes of a Machine
    1. CNN architecture (convolution, pooling...)
12. Terra Incognita
    1. In classic ML algorithms, a simpler model (less parameters) tends to underfit, while a complex model can overfit
    2. However this does not seem to happen with deep neural networks. The most popular and powerfull models nowadays have trillions of parameters, they should overfit the data but they dont, and no one knows why this happens 
    3. Self-supervised learning, a model is trained using unlabeled data, having it predict missing parts from the context

## My thoughts on the book

In my opinion, the only two aspects I didn't like about the book were that it sometimes dwells too much on historical context—for example, in chapter 11, almost half of it is just history. I also wish it had briefly introduced a wider range of algorithms, such as decision trees, random forests, or support vector regression, to give readers a better sense of the broader ML landscape.

Aside from that, the book is amazing if you want to learn ML from scratch and not only use the algorithms but also understand what they do and why they work the way they do.