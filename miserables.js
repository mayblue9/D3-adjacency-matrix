// This file contains the weighted network of coappearances of characters in
// Victor Hugo's novel "Les Miserables". Nodes represent characters as indicated
// by the labels, and edges connect any pair of characters that appear in the
// same chapter of the book. The values on the edges are the number of such
// coappearances. The data on coappearances were taken from D. E. Knuth, The
// Stanford GraphBase: A Platform for Combinatorial Computing, Addison-Wesley,
// Reading, MA (1993).
//
// The group labels were transcribed from "Finding and evaluating community
// structure in networks" by M. E. J. Newman and M. Girvan.

var miserables = {
  nodes:[
    {nodeName:"Myriel", group:1},
    {nodeName:"Napoleon", group:1},
    {nodeName:"Mlle. Baptistine", group:1},
    {nodeName:"Mme. Magloire", group:1},
    {nodeName:"Countess de Lo", group:1},
    {nodeName:"Geborand", group:2},
    {nodeName:"Champtercier", group:2},
    {nodeName:"Cravatte", group:2},
    {nodeName:"Count", group:1},
    {nodeName:"Old Man", group:1},
    {nodeName:"Labarre", group:2},
    {nodeName:"Valjean", group:2},
    {nodeName:"Marguerite", group:3},
    {nodeName:"Mme. de R", group:2},
    {nodeName:"Isabeau", group:3},
    {nodeName:"Gervais", group:3},
    {nodeName:"Tholomyes", group:3},
    {nodeName:"Listolier", group:3},
    {nodeName:"Fameuil", group:3},
    {nodeName:"Blacheville", group:3},
  ],
  links:[
    {source:1, target:1, value:1},
    {source:2, target:3, value:1},
    //{source:3, target:4, value:1},
  ]
};
