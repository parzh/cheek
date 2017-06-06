### Principles of `check` in a nutshell:

#### Provide readability

The main purpose of `check` is to make user's code as readable as possible.  
We want you to write in pure English and get JavaScript as the outcome.  

#### Answer questions

Generally, `check` is designed as a library of yes/no answers to simple yes/no questions.  
The user, asking a question, will always get a boolean value as a result.  

#### Be concisely verbose

Each method of `check` should have a name strictly corresponding to its behavior.  
When we see that the method's name gets really long, we provide a shortening alias for it.  

#### Keep it simple

It is inappropriate for us when something behaves not as it should.  
So, we prefer to create new small methods instead of overloading existing ones.  

#### Even simpler

We try not to use hidden JavaScript hacks and tricks to achieve desired.  
The user of `check` should understand what's going on, even if he is not a js-ninja.  

#### Use it or fork it

We find `check` supersaturated with an advanced foolproof logic a bad idea.  
Thus, for proper functioning of `check` the user should not alter its behavior.  